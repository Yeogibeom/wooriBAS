module.exports = {
  outputDir: 'C:/wooriBAStest/src/main/resources/static',
  // npm run serve 개발 진행시에 포트가 다르기때문에 프록시 설정
  devServer: {
    proxy: 'http://localhost:8080'
  }
};