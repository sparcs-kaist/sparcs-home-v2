# SPARCS home Refactoring project

## 프로젝트 목적

본 프로젝트는 기존의 SPARCS home을 이어 받아 기능을 보충 및 추가하고, 유지보수가 용이하도록 refactoring 하기 위해 시작되었습니다.

## 프로젝트 설명

### backend

node `v10.13.0`을 기준으로 하고 있습니다.
공홈으로 업로드 되는 static 파일은 local과 AWS S3에 저장하고 있습니다.

### frontend

기존에 사용하던 vue.js에서 react.js로 리팩토링 하고 있습니다.
react.js 고수분들의 많은 도움이 필요합니다.
특히 컴포넌트 단위의 개발에 능숙하신 분은 조언 부탁드립니다.

### testing

(생각중)

### database

AWS RDS - Mysql

### deploy

docker in EC2
CodePipeline In-place deploy

### mornitoring

process - pm2
application - ELK (계획중)

## Branch Rules

- Master : Only used to deploy
- Dev : Main development branch (Do not push here)
- Others :
  - feature/FEATURE-NAME : new feature
  - fix/FIX-NAME : fix bug or refactoring

## Work Log & TODO lists

[Work Log & TODO lists](https://hackmd.io/s/B1Jsi-VPV)

Contact to stark ([lannstark](https://github.com/lannstark))
