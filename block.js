/**
 * Import crypto-js/SHA256 library

const SHA256 = require('crypto-js/sha256');
*/
const cryptojs = require('crypto-js')
const { promisify } = require('util')
const SHA256_p = promisify(cryptojs.SHA256)
/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = 0;
        this.nonce = 144444;
      	this.body = data;
      	this.hash = "";
    }

    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create 
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
  	// 
  	async generateHash() {
      	// Use this to create a temporary reference of the class object
      	/**let self = this;
        //Implement your code here
		this.hash = cryptojs.SHA256(JSON.stringify(this)).toString();*/
		p = await SHA256_p(JSON.stringify(this));
		p.resolve('Success').then(function(result) {
			this.hash = result.toString();
		});
		return this;
    }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;