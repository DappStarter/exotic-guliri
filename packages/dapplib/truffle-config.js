require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy recipe stick minor include end army giant'; 
let testAccounts = [
"0x9aa9225f03aa583495c527366fe4e37c2d212f0e62c06553ef9a6fd01906cb4d",
"0xf465b3571ae4859dc132a36e1e6b5a56c748da6642267fe8832fa2f1f729ce4d",
"0xe03f7f610a0de43c7bce241fa808cd7022aa309b819f8e24fcff6f9b925baa29",
"0xed511e1795470354e895ededdc23ad2e697a2c27f3c04bc56f255637bc3498e8",
"0x722cb9afe85f91660a2d3b63342e738228a2a4f677ceeb3ebbc8fe80b49bf33b",
"0x787b0915ff06b1d0f61c74890f7d3baa5ce375934a7745ffa4c8ab17b91c9716",
"0x5595e8b6ca72546e94e13e11e1cacc2ca171e0b0fdeca1595a8fe14e4a133604",
"0xbe3d9047b0d4b6107029d64f85e1c867dbddb12d05d6d1f9a38c89ab3ac35fdc",
"0x0546ecd3de1f469c61378fedd5f69e557f2786872aa2cde9c3931d995926360e",
"0x8e8151f03662c36c8258cdb8562d1ec310ad72c12c4a65b2ada2793e9c6ffefa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
