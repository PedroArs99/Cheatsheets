# Services Programming in C++
Each service has a Data structure with request and response fields. These fields are tipically `structs`.

The Clients send a request and expect a response from the server.

NOTE: Service calls are blocking. That means there's any callback. The program waits for a response before going on.