const Eos = require('eosjs');

const config = {
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    httpEndpoint: 'https://api.eosnewyork.io',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};

const eos = Eos(config);

// Promise
eos.getBlock(1).then(result => console.log(result)).catch(error => console.error(error));

// callback
eos.getBlock(1, (error, result) => console.log(error, result));

// Parameters object
eos.getBlock({block_num_or_id: 1}).then(console.log);
