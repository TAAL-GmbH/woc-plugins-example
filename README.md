# woc-plugins-example

A set of example decoders to show how a plugins can can be created

## Prerequisites

Node.js 18.14.2 or above

An openAI API key in order to run one of the examples. In order to get a key you need to signup [here](https://platform.openai.com/signup) and then once logged in to your account go to [ttps://platform.openai.com/account/api-keys] https://platform.openai.com/account/api-keys to create a key

## Installation

1.  Clone this repo using `git clone https://github.com/TAAL-GmbH/woc-plugins-example.git`
2.  Move to the directory: `cd woc-plugins-example`
3.  Run `npm i` in order to install dependencies
4.  Run `npm start`.

You will now be able to run the examples below.

## Examples

### Examples using a transactions hash

- An example of rendering the tx id into a 3d animation: http://localhost:3000/tx-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example of returning a json dummy order based on a tx: http://localhost:3000/tx-decode/main/order/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example of using OpenAI to generate an image based on the transaction id (Requires a api key to view) : http://localhost:3000/tx-decode/main/image/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

### Examples using a block hash

- An example of rendering the block hash into a 3d animation: http://localhost:3000/block-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example showing the time of the block mined since the genesis: http://localhost:3000/block-decode/main/time/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

### Example using a address hash

- An example of using the the woc-api to get the balance information: http://localhost:3000/address-decode/main/balance/15H8GUb7vstXFXpu6oBwZYBTZ1nbzHrn3n

### Example using a script hash

- An example of using the the woc-api to get an ordered list of UTXOs for a given
  script hash: http://localhost:3000/script-decode/main/unspent/d47215e97b4c4e5c69c48da818253f4ef985e493f7506915bfd9b1d1df9023fd

### Example using a search term

- An example using dummy data to do a search for an order tied to a transaction id
  then outputting the json response: http://localhost:3000/search-decode/main/order/99addd00af9c2719c41f2c1ec0eb0e45eaa32f343394f7bed2039459218cdc0a

### Example of a data decode

- An example of rendering the hex from the vout converted to ascii: http://localhost:3000/data-decode/main/ascii/92546b1797a7c4a00cd6bcf85771e66c1e2050514ed75e591d9b230982cf77a5/1
