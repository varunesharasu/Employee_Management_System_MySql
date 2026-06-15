## Backend (Node + Express + MySQL)

### 1) Configure env
- Copy `.env.example` to `.env`
- Fill in your MySQL credentials

### 2) Install deps
If your `npm` command is broken on Windows, you can run npm via node directly:

```bat
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

Or, if `npm` works normally:

```bat
npm install
```

### 3) Run
```bat
npm start
```

### 4) Test
Open:
- http://localhost:3001/health

You should see `{ ok: true, mysql: "connected" }` when the DB settings are correct.
