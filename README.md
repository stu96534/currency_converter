# 貨幣轉換器
以爬蟲技術取得台灣銀行貨幣匯率資料，用前後端分離方式打造，此為後端專案。
- 將專案部署至docker產生image，再將image匯至Artifact Registry
- 部署網站為google cloud run
- 前端專案連結：https://github.com/stu96534/currency_converter_front.git

## 功能介紹
### 貨幣查詢
 - 可即時查詢台灣銀行貨幣匯率資料
### 貨幣轉換
 - 可輸入台幣金額換算外幣金額
 - 可輸入外幣金額換算台幣金額
 - 可選擇使用現金買入、現金賣出、即期買入、即期賣出之匯率進行換算

## 安裝
1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/stu96534/currency_converter.git
```

2.cd 至本專案資料夾:

```
cd currency_converter
```

3.下載套件:

```
npm install
```

4.爬蟲種子資料:

```
npm run seed
```

5.連接MySQL資料庫並載入:

```
npx sequelize db:migrate
```

6.載入種子資料:

```
npx sequelize db:seed:all
```

7.啟動程式:

```
npm run dev
```
## 開發工具
### window 10
 - Visual Studio Code - 開發環境
 - Node.js 版本 16.15.0- 伺服器
 - express 版本 4.18.2- 開發框架
 - cheerio 版本 1.0.0-rc.12 - 爬蟲
 - mysql2 版本 3.6.1 -資料庫
 - sequlize 版本 6.33.0
 - sequlize-cli 版本 6.6.1
 - dotenv 版本 16.3.1
 - cors 版本 2.8.5 - 跨域請求
 - request 版本 2.88.2
 
