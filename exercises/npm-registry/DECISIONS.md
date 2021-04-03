A list of jquestions that came up for me, with answers I made up for them to explain my thought process a bit! Since back and forth conversation isn't easy in writing or reviewing a takehome.

I've not done much TS/js before, so stumbled through the frameworks & syntax a bit, and almost certainly not idomatic.

1. How far down the dependency graph should I resolve (ie stop after a certain level)?
    * All the way! Seems more fun :)
1. Maintain backwards compatibility on the existing API (vs breaking, or adding a new endpoint/query-param/etc)?
    * Of course keep compatibility! Can add a new field to the response which isn't (normally) a breaking change, and aim for a minimal hit to perf so current consumers aren't affected.
1. How to style the API w/the new field? A key/val pair of package/deps?
    * Decided on a single list, as the package name is in the object's "name" field and can filter by that if needed, but appreciate a key/val pair would be a bit easier to get transitive deps for a single dependency.
1. UI?
    * Not done UI for years. Simple React inline was easy to get going but would have been learning from scratch for this. Kept it simple with jQuery (which is still ugly and hand built HTML :see_no_evil:).

### todo

[x] naive inline transitive impl
[x] display response in a webpage
[x] get version based on semver (list all versions, then filter)
[ ] productionise:
    [ ] metrics/logging/tracing, or at least mention where it'd be and my almost ignorance of javascript promises/async
[ ] optimise:
    [ ] app: cache versions calls, and specific versions (via a Map)
    [ ] tests: stub calls to npm, nock for local server, or reduce number of calls in tests by combining/moving-to-beforeAll?
[ ] in-memory db to externalise npm cache (vs an http cache like varnish)
[ ] update db based on npm http cache response headers
[ ] support tag queries in api (eg 'latest', via the 'dist-tags' npm field)