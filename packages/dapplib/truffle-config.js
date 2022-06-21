require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remain evil hunt creek foam that'; 
let testAccounts = [
"0x4b867841d9b2f0f8f497f1a82690cd8e4aa7528fc15e45347f8bad49e9be70fa",
"0xbca5f0b34503d802ae704520760e31e95eaed0fd565a40f423bc279d267c975a",
"0x8f7b69ceeeba1dc7b8b90a7119321ec868683406d1b6d31f40ed84f619911e98",
"0x1ae0bf07c1a4a980a46fda64f138023ade785a7ebcefaa7ea6b080f3a9ef1916",
"0x090511be45e4d82ab4ff5024c70a3ae15c032449c6bcbad5de06fb6d05045b8f",
"0x4c80e1ffb0a32f5cd22715b0d41cb214e0c694b52778f1c0278af0d0e5098043",
"0x48179dac5a54d38fce3407b69b3168516c5535d5aaa64ea761c02d3146274d09",
"0x099e69c81ae072e3c5bcdc4275ff3cea686a94c09b8b389ef1b6520327ac82d7",
"0x42602dbf8b6cad3cf58455c4b7bc1681cd62e9a071186a1eef44b471f1ec5152",
"0xf8fdc0f91a0498b6248c7078bf9f759d2df419ecbe0f2e8bff2f0f66b471387b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

