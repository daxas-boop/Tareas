const URL ="http://127.0.0.1:8080/clase-7-8/tareaclase8-1.html"

it("Prueba Errores" ,()=>{
    cy.visit(URL);
    cy.get("#mostrar-error1").should("have.class", "oculto")
    cy.get("input[name='familiares']").should("not.have.class", "error")
    cy.get("input[name='siguiente']").click();
    cy.get("#mostrar-error1").should("not.have.class", "oculto")
    cy.get("input[name='familiares']").should("have.class", "error")
    cy.get("#mostrar-error1").should("contain","Error: Ingrese un número")
    cy.get("input[name='familiares']").type("3")
    cy.get("input[name='siguiente']").click();
    cy.get("input[name='familiares']").should("not.have.class", "error")
    cy.get("input[name='edades']").eq(0).type("1")
    cy.get("#mostrar-error").should("have.class","oculto")
    cy.get("input[name='calcular']").click();
    cy.get("input[name='edades']").eq(0).should("not.have.class","error")
    cy.get("input[name='edades']").eq(1).should("have.class","error")
    cy.get("input[name='edades']").eq(2).should("have.class","error")
    cy.get("#mostrar-error").should("contain","Error: La edad no puede estar vacia")
    cy.get("#mostrar-error").should("not.have.class","oculto")
    cy.get("input[name='edades']").eq(1).type("1")
    cy.get("input[name='edades']").eq(2).type("1")
    cy.get("input[name='calcular']").click();
    cy.get("#mostrar-error").should("have.class","oculto")
    cy.get("input[name='edades']").eq(0).should("not.have.class","error")
    cy.get("input[name='edades']").eq(1).should("not.have.class","error")
    cy.get("input[name='edades']").eq(2).should("not.have.class","error")
})


it("Prueba empezar de nuevo", ()=>{
    cy.get("button[type='reset']").click();
    cy.get("input[name='edades']").should("not.exist")
    cy.get("#mostrar-error").should("have.class","oculto")
    cy.get("#mostrar-error1").should("have.class","oculto")
    cy.get("input[name='calcular']").should("have.class","oculto")
    cy.get("input[name='siguiente']").should("not.have.class","oculto")
})

it("Prueba funcionalidad", ()=>{
    cy.get("input[name='familiares']").type("3")
    cy.get("input[name='siguiente']").click();
    cy.get("input[name='edades']").eq(0).type("2")
    cy.get("input[name='edades']").eq(1).type("1")
    cy.get("input[name='edades']").eq(2).type("5")
    cy.get("input[name='calcular']").click();
})

