# Summary

* [Introduction](README.md)
* [Getting Started](Getting-Started.md)
  * [Install](Getting-Started.md#install)
  * [Introductory tutorial](Getting-Started.md#introductory-tutorial)
  * [Testing with mockyeah](Getting-Started.md#testing-with-mockyeah)
* [Configuration](Configuration.md)
* [Service Snapshots](Service-Snapshots.md)
* API
  * Mock API
    * [`get/post/put/patch/delete/all()`](API/Mock-API.md)
      * [Request Match](API/Mock-API.md#match)
      * [Response Options](API/Mock-API.md#options)
    * [`record()`](API/record.md)
    * [`play()`](API/play.md)
    * [`reset()`](API/reset.md)
    * [`close()`](API/close.md)
    * [`proxy()`](API/proxy.md)
  * Expectation API
    * [`.expect()`](API/Expectation-API.md#expect)
    * [`.expect().atLeast()`](API/Expectation-API.md#atLeast)
    * [`.expect().atMost()`](API/Expectation-API.md#atMost)
    * [`.expect().never()`](API/Expectation-API.md#never)
    * [`.expect().once()`](API/Expectation-API.md#once)
    * [`.expect().twice()`](API/Expectation-API.md#twice)
    * [`.expect().thrice()`](API/Expectation-API.md#thrice)
    * [`.expect().body()`](API/Expectation-API.md#body)
    * [`.expect().params()`](API/Expectation-API.md#params)
    * [`.expect().header()`](API/Expectation-API.md#header)
    * [`.expect().verify()`](API/Expectation-API.md#verify)
  * Classes
    * [`Server`](API/Server.md)
* [Recipes/Examples](https://github.com/mockyeah/mockyeah/tree/master/examples)
* [CLI](Service-Snapshot-CLI.md)
* [Contributing](Contributing.md)