# Start

```sh
yarn

echo URL=http://localhost\\nPORT=8001\\nNODE_ENV=dev > .env

yarn start
```

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">

😎숨겨진 내용😎

</div>
</details>

# api 명세서

## 책 정보 모두 가져오기

### 요청

`GET /api/book`

### 응답 예시

```json
[
	{
		"id": "636087e1fc13ae19890000c8",
		"name": "Witting LLC",
		"author": "Alric Spadazzi",
		"country": "Indonesia",
		"gender": "Male",
		"year": 2009,
		"ISBN": "029303844-9",
		"price": "$80.98",
		"update_date": "11/7/2016"
	},
	{
		"id": "636087e1fc13ae19890000c9",
		"name": "Schoen-Funk",
		"author": "Melinda Marston",
		"country": "Croatia",
		"gender": "Non-binary",
		"year": 2005,
		"ISBN": "467558456-X",
		"price": "$12.77",
		"update_date": "7/1/2022"
	},
  ...
]
```

---

## 책 정보 가져오기

### 요청

`GET /api/book/:id`

| 속성 | 이름 | 타입            | 필수    |
| ---- | ---- | --------------- | ------- |
| path | id   | string(MongoID) | require |

### 요청 예시

`http://localhost:8001/api/book/636087e5fc13ae19890004ab`

### 응답 예시

```json
{
  "id": "636087e5fc13ae19890004ab",
  "name": "McLaughlin-Cormier",
  "author": "Terrell Marley",
  "country": "Brazil",
  "gender": "Male",
  "year": 2007,
  "ISBN": "649542923-1",
  "price": "$68.16",
  "update_date": "6/21/2017"
}
```

---

## 책 등록하기

### 요청

`POST /api/book HTTP/1.1`
|속성|이름|타입|필수|
|------|---|---|---|
|body|name|string|require|
|body|author|string|require|
|body|country|string|require|
|body|gender|string|require|
|body|year|number|require|
|body|ISBN|string(ISBN)|require|
|body|price|number|require|

### 요청 예시

```json
{
  "name": "리팩터링 2판 (리팩토링 개정판)",
  "author": "Martin Fowler",
  "country": "USA",
  "gender": "Male",
  "year": 2020,
  "ISBN": "9791162242742",
  "price": 30
}
```

### 응답 예시

`201`

```json
{
  "id": "6387774e4d2879f45e52a644",
  "name": "리팩터링 2판 (리팩토링 개정판)",
  "author": "Martin Fowler",
  "country": "USA",
  "gender": "Male",
  "year": 2020,
  "ISBN": "9791162242742",
  "price": "$30.00",
  "update_date": "12/1/2022"
}
```

---

## 책 삭제하기

### 요청

`DELETE /api/book/:id HTTP/1.1`
| 속성 | 이름 | 타입 | 필수 |
| ---- | ---- | --------------- | ------- |
| path | id | string(MongoID) | require |

### 요청 예시

`http://localhost:8001/api/book/636087e5fc13ae19890004ab`

### 응답 예시

`204`

---

## 책 수정하기

### 요청

`PUT /api/book/:id HTTP/1.1`
|속성|이름|타입|필수|
|------|---|---|---|
| path | id | string(MongoID) | require |
|body|name|string|require|
|body|author|string|require|
|body|country|string|require|
|body|gender|string|require|
|body|year|number|require|
|body|ISBN|string(ISBN)|require|
|body|price|number|require|

### 요청 예시

`http://localhost:8001/api/book/6387774e4d2879f45e52a644`

```json
{
  "name": "리팩터링 2판 (리팩토링 개정판)",
  "author": "Martin Fowler",
  "country": "USA",
  "gender": "Male",
  "year": 2020,
  "ISBN": "9791162242742",
  "price": 35
}
```

### 응답 예시

`201`

```json
{
  "id": "6387774e4d2879f45e52a644",
  "name": "리팩터링 2판 (리팩토링 개정판)",
  "author": "Martin Fowler",
  "country": "USA",
  "gender": "Male",
  "year": 2020,
  "ISBN": "9791162242742",
  "price": "$35.00",
  "update_date": "12/1/2022"
}
```

# 과제 안내

- 과제 제출: 다음 Gitlab Group에 프로젝트 생성 후 Push
- 과제 시나리오: 도서관 사서가 이용하는 도서 등록 API

다음 URL로 요청하면 주석에서 표현한 행위를 하는 REST API를 만들기

```js
/* 책 정보 모두 가져오기 */
GET /api/book HTTP/1.1

/* 책 정보 가져오기 */
GET /api/book/:id HTTP/1.1

/* 책 등록하기 */
POST /api/book HTTP/1.1

/* 책 삭제하기 */
DELETE /api/book/:id HTTP/1.1

/* 책 정보 수정하기 */
PUT /api/book/:id HTTP/1.1
```
