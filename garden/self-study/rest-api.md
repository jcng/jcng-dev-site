---
title: "What is a REST API?"
date: "2021-05-01"
tags: ["self-study"]
---

# What is a REST API?
If you've been looking into building a web app or looking at dev job openings, you've probably come across the term "REST API" before (and if not, now's a good time to get a head start!). So what does that mean, exactly?

Fundamentally, the concept of REST APIs is less complicated than the acronym might make you think. A REST API is a system through which a client can make **requests** from a server. These requests can perform the following actions (commonly referred to as CRUD):
- Create
- Read
- Update
- Delete

Once the server performs the requested action, it sends a **response** back to the client.

That definition by itself probably isn't very helpful, so don't worry if it's not clicking yet. We'll go through some practical examples and give context to why REST APIs exist. As you read on, think about how these guiding concepts apply to the examples given

## API
An API (**A**pplication **P**rogramming **I**nterface) is a created set of rules that defines how software talks to each other -- or even to hardware!

APIs are a broad concept, and encompass any sort of structured definition that determines communication between technology. For the purposes of these notes, we're most concerned with web APIs. The most common web API is a REST API.

## REST
REST (**RE**presentational **S**tate **T**ransfer) are rules that developers follow as a guide for creating an API that behaves.

Before we get into what those rules are exactly, let's talk about why those rules exist. If your stack abides by REST architecture, you gain the benefits of **Separation of Concerns** and **Statelessness**. What this ultimately means is that you can care less about the relationship between an application and an external data source, and more about how each of those work independently.

### Benefits of REST
#### Separation of Concerns
The "concerns" in this case are the client and the server. The client doesn't need to know everything about how the server functions, and likewise the server doesn't need to know everyting about how the client functions.

The client and server only need to know what types of requests are being sent and what the structure of the response will be -- everything else doesn't matter.

This means that systems that abide by a REST architecture are highly modular and flexible. Changes made on one (the client or the server) do not have bearing on the other.

#### Statelessness
Just as you REST enables you to not worry about how the client or server work, it also enables you to not worry about the *state* of each of those pieces. This means that you'll never need to take into account the history of requests you make. Each request is handled independently. There's a concept called [[indempotence]] which describes a function in which:
> *Given the same input executed on the same state, this function will always provide the same output.*

Since REST guarantees statelessness, that takes the "in the same state" part of that definition out of the question. That makes the logic for your requests a lot easier to think through -- there's far fewer corner cases to account for when you have guaranteed consistency that a given input will give you the same output every time.

### Rules
Now that you know the benefit of REST, we can dive into the "rules" that actually define the architectural style. These rules define how **requests are made** and how **responses are handled**. We'll talk about them each in turn.

#### Requests
The first piece of a request is a definition of the **type** of request being made. This type corresponds to what action in "CRUD" is being requested:
- `POST`: **C**reate
- `GET`: **R**ead
- `PUT/PATCH`: **U**pdate
- `DELETE`: **D**elete

A request also contains a **header**, which has an important parameter called the `Accept` field. The value of this parameter is a [[mime-type]], which is a type and subtype description of content. The server uses the information in the `Accept` field to make sure it isn't sending a response back that the client doesn't know what to do with. Some examples of MIME types are:
-  `image`: `image/png`, `image/jpeg`
- `audio`: `audio/wav`
- `video`: `video/mp4`
- `application`: `application/json`, `application/pdf`

The last required piece of a request is the **path**, which defines which resource on a server a request should be made on. A good path is both hierarchal and descriptive -- meaning if you were to read it left to right, you can get a good idea of what resource is at that path's location, even if you're not fully familiar the the server you're making the request on.

If you were working with a server for a burger chain named Dev Burgers, an example of a good path name is something like, `devburgers.com/orders/10/item/2`. Just by looking at the path name, we can see that what we're requesting is the second item of the tenth order.

Optionally, a request can also include a **body**, with additional information in a payload.

#### Responses
After a server processes a request, it sends back a response to the client that made that request. These responses have their own rules to abide by in a RESTful system.

Just like requests, responses must include a **header** with a parameter specifying the `Content-Type`. This corresponds to the MIME Types used in the `accept` field of a request.

In addition to the header, a response should also contain a **status code**, which corresponds to the result of the request

Some common status codes:

| Code | Meaning |
| ------- | ------- |
|200 (OK)|This is the standard response for successful HTTP requests.|
|201 (CREATED)| This is the standard response for an HTTP request that resulted in an item being successfully created.|
|204 (NO CONTENT) |This is the standard response for successful HTTP requests, where nothing is being returned in the response body.|
|400 (BAD REQUEST)| The request cannot be processed because of bad request syntax, excessive size, or another client error.|
|403 (FORBIDDEN)|The client does not have permission to access this resource.|
|404 (NOT FOUND)|The resource could not be found at this time. It is possible it was deleted, or does not exist yet.|
|500 (INTERNAL SERVER ERROR)|The generic answer for an unexpected failure if there is no more specific information available.|

The expected status code for each possible type of request is:
- GET: 200 (OK)
- POST: 201 (CREATED)
- PUT: 200 (OK)
- DELETE: 204 (NO CONRENT)

In general, different status codes can be summarized  as follows:
- 200s: request has **succeeded**
- 300s: request is **redirected** to another URL
- 400s: a **client-side error** has occurred
- 500s: a **server-side error** has occurred

---
>**Sources:**
>What is a REST API?
>https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
>What is REST?
>https://www.codecademy.com/articles/what-is-rest