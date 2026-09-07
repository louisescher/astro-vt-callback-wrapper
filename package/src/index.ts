type AllowedPaths = "*" | string[];
type Callback = () => void;

const byPathname = new Map<string, Callback[]>();
const wildcardCallbacks: Callback[] = [];

document.addEventListener("astro:page-load", () => {
	const current = location.pathname;

	for (const callback of wildcardCallbacks) callback();

	const specific = byPathname.get(current);
	if (specific) for (const callback of specific) callback();
});

/**
 * A wrapper around `astro:page-load`. Fires a callback only when on a certain page.
 * @param callback The function to execute when the `allowedPaths` pattern matches
 * @param allowedPaths The paths the given callback function should run on
 */
export function onPageLoad(callback: Callback, allowedPaths?: AllowedPaths) {
	if (allowedPaths === "*") {
		wildcardCallbacks.push(callback);
		return;
	}

	const pathnames = new Set(allowedPaths ?? [location.pathname]);
	for (const pathname of pathnames) {
		const list = byPathname.get(pathname);
		if (list) list.push(callback);
		else byPathname.set(pathname, [callback]);
	}
}
