# react-hooks
## 環境構築

```
$ npx create-react-app --scripts-version 3.0.1 react-hooks
```

## TIPS

### setStateの関数型の更新
setStateに関数を渡すことができて前回のstateを受け取って更新された値を返却することができる
https://ja.reactjs.org/docs/hooks-reference.html#functional-updates

### defaultProps
https://qiita.com/pepo/items/fa68fdc3c79e006adef6

### onChangeのお約束

```
onChange={e => setName(e.target.value)}
```
