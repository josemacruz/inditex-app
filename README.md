# Inditex App

## Installation

```bash
npm ci
```

## API Integration

The required API for integration is unavailable, so a simulated API was created using `json-server`. The `db.json` file holds the products data that will be returned by the simulated API.

If you need additional information, the [json-server repository](https://github.com/typicode/json-server) is attached.

### Note

Since the API is not available for adding items to the cart, we use the following JSON format to add items:

```
{
	"productId": "0001",
	"colorCode": 1,
	"storageCode": 0,
	"id": 1
}
```

Please note that this format does not provide information on the number of items currently in the cart. To check the number of items in the cart, you must make a GET request to the /cart endpoint.

[JSON-SERVER of this App: ](https://my-json-server.typicode.com/josemacruz/inditex-app)

## Usage

Start dev server ans json-server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Test
 
```bash
npm run test
```

Code check

```bash
npm run lint
```

