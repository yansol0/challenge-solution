### Node solution

The node part of the solution is presented as a basic API, with one single endpoint that responds with the calculation result.

First install node dependencies by running

```
npm i
```

The challenge solution is on /api/v1/cart - the endpoint takes a post request, containing the SKU string, e.g.

```
{
    "items": "AAAABBBCCCCbcAca"
}
```

### C# solution

The C# solution is a simple CLI program - to run it, cd into the cs directory and run

```
dotnet run
```
