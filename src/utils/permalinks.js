import { SITE } from '~/config.mjs';

const trim = (str, ch) => {
	let start = 0,
		end = str.length;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, '/'));
const createPath = (...params) => '/' + params.filter((el) => !!el).join('/');

const basePathname = trimSlash(SITE.basePathname);

/** */
export const getCanonical = (path = '') => new URL(path, SITE.origin);

/** */
export const getPermalink = (slug = '', type = 'page') => {
	const links = {
		page: createPath(basePathname, slug)
	}

	return links[type] || createPath(basePathname, slug)
};

/** */
export const getHomePermalink = () => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};
