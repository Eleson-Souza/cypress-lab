# 📚 Cypress Test Suite – Guia Rápido

## 1. Setup rápido

```bash
# instalar deps
npm ci      # ou npm install

# abrir dev‑server (Vite)
npm run dev

# abrir Cypress UI (CT + E2E)
npx cypress open    # escolha modo

# headless (CI) – roda tudo
npx cypress run
```

### Scripts sugeridos

```json
"scripts": {
  "dev": "vite",
  "ct": "cypress open --ct",
  "e2e": "cypress open --e2e",
  "test": "cypress run",
  "ci": "npm run dev & npx wait-on http://localhost:5173 && npm run test"
}
```

---

## 2. Cheatsheet de comandos

| Categoria     | Snippet                                                                            | Dica                                                   |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Estrutura** | `describe()`, `it()`, `beforeEach()`                                               | define blocos de teste (`describe`), casos (`it`) e pré-condições (`beforeEach`) |
| **Seleção**   | `cy.get('[data-cy=btn]')`, `cy.contains('Texto')`                                  | use `data-cy` sempre                                   |
| **Ações**     | `.click()`, `.type('abc{enter}')`, `.select('Opção')`                              | `{ force:true }` se oculto                            |
| **Asserts**   | `.should('be.visible')`, `.should('contain.text','Ok')`                            | retry automático 4 s                                   |
| **Valores**   | `.invoke('text')`, `.then(val => …)`                                               | para capturar strings/números                          |
| **Rede**      | `cy.intercept('GET','/api/*', {fixture:'file.json'}).as('api')`, `cy.wait('@api')` | sem `cy.wait(ms)`                                      |
| **Node side** | `cy.task('db:reset')`                                                              | faz seed/reset fora do browser                         |
| **Debug**     | `cy.pause()`, `cy.debug()`, `Cypress.log()`                                        | step‑by‑step                                           |

---

## 3. Custom commands (exemplo)

```ts
// cypress/support/commands.ts
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, pwd: string): Chainable<void>;
    }
  }
}
Cypress.Commands.add("login", (email, pwd) => {
  cy.session([email, pwd], () => {
    cy.request("POST", "/api/login", { email, pwd }).then((r) =>
      window.localStorage.setItem("token", r.body.token)
    );
  });
});
```

Uso: `cy.login('user@site.com','123456');`

---

## 4. Component Testing

```bash
npx cypress open --ct   # wizard ➜ React + Vite
```

```tsx
cy.mount(<Button label="Salvar" />);
cy.get("button").should("contain.text", "Salvar");
```

---

## 5. Fluxo E2E típico (login → checkout)

```bash
npx cypress open --e2e
```

```ts
cy.intercept("POST", "/api/login", { fixture: "auth/login.ok.json" }).as(
  "login"
);
cy.visit("/login");
cy.get("[data-cy=email]").type("buyer@x.com");
cy.get("[data-cy=pass]").type("123{enter}");
cy.wait("@login");
cy.location("pathname").should("eq", "/catalog");
```

---

## 6. Troubleshooting rápido

| Sintoma                                  | Possível causa                 | Remédio                                                       |
| ---------------------------------------- | ------------------------------ | ------------------------------------------------------------- |
| `ReferenceError: exports is not defined` | projeto ESM + ts-node CommonJS | renomeie `cypress.config.mjs` **ou** retire `"type":"module"` |
| `Blank page` em run                      | CSP `frame-ancestors`          | iniciar Chrome com `--disable-web-security`                   |
| Elemento não encontrado                  | seletor frágil                 | troque por `data-cy` + `cy.contains()`                        |

---

## 7. Links úteis

- Docs Cypress: [https://docs.cypress.io](https://docs.cypress.io)
- Real Events plugin: [https://github.com/dmtrKovalenko/cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events)
- Mochawesome: [https://github.com/adamgruber/mochawesome](https://github.com/adamgruber/mochawesome)
