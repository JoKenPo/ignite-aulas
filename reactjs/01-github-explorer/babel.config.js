module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic' //Precisa disso para executar sem importar o React no arquivo
    }]

  ]
};