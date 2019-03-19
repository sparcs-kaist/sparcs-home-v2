# SPARCS home Refactoring project

참여자 : lannstark, yolo, nick

## 프로젝트 목적

본 프로젝트는 기존의 SPARCS home을 이어 받아 기능을 보충 및 추가하고, 유지보수가 용이하도록 refactoring 하기 위해 시작되었습니다.

## 기존 프로젝트와 바뀐 점

이 항목은 계속 추가되고 있으며, 어느 정도 진행된 내용만을 다룹니다.

- 전체적인 그림
  - Vue.js에서 React.js로 frontend가 바뀌었습니다.
- 세미나 탭
  - 업로드가 잘 되지 않던 기능을 고치고 수동 EFS 업로드 대신 자동 S3 업로드로 변경

## 프로젝트 설명

### Backend

node `v10.13.0`을 기준으로 하고 있습니다.  
공홈으로 업로드 되는 static 파일은 local과 AWS S3에 저장하고 있습니다.

### Frontend

기존에 사용하던 vue.js에서 react.js로 리팩토링 하고 있습니다.  
react.js 고수분들의 많은 도움이 필요합니다.  
특히 컴포넌트 단위의 개발에 능숙하신 분은 조언 부탁드립니다.  

### Testing

(열심히 생각중)

### Database

AWS RDS - Mysql

### Deploy

NginX  
CodePipeline In-place deploy  
Route53 DNS

### Mornitoring

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
