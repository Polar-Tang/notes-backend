https://pkg.go.dev/net/http#ServeMux
it's an http multiplexer, meaning it see the route of the paths to search the url that must matches with that string. Then sanitize the url and redirect it to the handler
- The mux see incoming request and compared to a list of registered routes
- If there's a match the rout call the handlers of that route

The rules form the match include wildcards utilizing methods such as [pathvalue](https://pkg.go.dev/net/http#Request.PathValue) . And it has routing before normalization