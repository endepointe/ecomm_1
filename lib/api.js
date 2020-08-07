const API_URL = process.env.STOREURL;
const API_TOKEN = process.env.STOREFRONTTOKEN;
const API_VERSION = '2020-07';

export async function fetchAPI() {
  const res = await fetch(`https://${process.env.SHOPIFY_STORE_API_KEY}:${process.env.SHOPIFY_STORE_PASSWORD}@${process.env.SHOPIFY_USERNAME}.myshopify.com/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': API_TOKEN
    },
    body: JSON.stringify({
      "query": "{shop {id name email}}"
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch api');
  }
  return json.data;
}