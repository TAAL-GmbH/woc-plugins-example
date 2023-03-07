# woc-plugins-example

This project contains different whatsonchain plugin examples. To learn more plugins click [here](https://docs.taal.com/core-products/whatsonchain/woc-plugins)

## Prerequisites

Node.js 18.14.2 or above

## Installation

1. Clone this repo using `git clone https://github.com/TAAL-GmbH/woc-plugins-example.git`
2. Move to the directory: `cd woc-plugins-example`
3. Run `cp .env.template .env`
4. Run `npm i` in order to install dependencies
5. Run `npm start`.

You will now be able to run the examples below.

## Examples

### Transaction type plugins

- An example of rendering the tx id into a 3d animation: http://localhost:3000/tx-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example of returning a json dummy order based on a tx: http://localhost:3000/tx-decode/main/order/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example of using OpenAI to generate an image based on the transaction id (Requires a api key to view)
  : http://localhost:3000/tx-decode/main/image/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

  In order to run the above example get a key you need to signup [here](https://platform.openai.com/signup) and then once logged in to your account go to https://platform.openai.com/account/api-keys to create a key.

  You will then need to add your openAI key to the the .env file

### Block type plugin

- An example of rendering the block hash into a 3d animation: http://localhost:3000/block-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

- An example showing the time of the block mined since the genesis: http://localhost:3000/block-decode/main/time/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11

### Address type plugin

- An example of using the the woc-api to get the balance information: http://localhost:3000/address-decode/main/balance/15H8GUb7vstXFXpu6oBwZYBTZ1nbzHrn3n

### Script type plugin

- An example of using the the woc-api to get an ordered list of UTXOs for a given
  script hash: http://localhost:3000/script-decode/main/unspent/d47215e97b4c4e5c69c48da818253f4ef985e493f7506915bfd9b1d1df9023fd

- The function`src/utils/getScriptHash.js` can be used to create a scrip thash from a scriptPubKeyHex

### Search type plugin

- An example using dummy data to do a search for an order tied to a transaction id
  then outputting the json response: http://localhost:3000/search-decode/main/order/99addd00af9c2719c41f2c1ec0eb0e45eaa32f343394f7bed2039459218cdc0a

### Data decoder plugin

- An example of rendering the hex from the vout converted to ascii: http://localhost:3000/data-decode/main/ascii/92546b1797a7c4a00cd6bcf85771e66c1e2050514ed75e591d9b230982cf77a5/1

## How to test the plugin on whatsonchain.com

1. Go to https://whatsonchain.com/ and then select 'Manage Plugins' link from the tools menu.
2. For this example select 'Block' from the decoder type drop down.
3. For this example lets name the plugin 'Block Anim'.
4. For the webhook url field use the following placeholder url http://localhost:3000/block-decode/{network}/anim/{blockhash} (Make sure you have the application running locally. In reality this will be the using the deployed url rather then running from localhost).
5. For the preview hash use an actual blockhash from mainnet. For this example you can use: 000000000000000002c7b29b04ec4431c380751463c6b3cb23f6fad414de8fe7.
6. The remaining fields you can fill in however you wish.
7. Make sure you have the example application running and then select the save button. You should be able to see a preview.

If you go to the any block page like https://whatsonchain.com/block-height/782095 you should now see a tab called 'Block Anim' which will allow you to view the decoder. As information is stored in local storage only you can view this on the browser you added the plugin to.

## Publishing the plugin

To make this plugin accessible to all user's on WhatsOnchain the decoder application will need to be published (Assuming at this point that your application is already deployed). You can then follow the instructions on how to publish by going to 'manage plugins' link on WhatsOnchain then clicking on the burger menu icon to the right of the plugin menu item named 'Block Anim' and selecting publish.

All the instructions will be presented to you on how to then publish the plugin.
