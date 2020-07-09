/// <reference types="jquery"/>

const URL = "http://127.0.0.1:8080/clase-5/tarea1.html"

it("Probar errores", () => {
    cy.visit(URL);
    cy.get("#enviar").click()
    cy.get("#salario-mensual").should("have.class", "error");
    cy.get("#opcion-horas").should("have.class", "error");
    cy.get("#opcion-dias").should("have.class", "error");
    cy.get("h3").eq(0).should("contain", "Ingrese un numero en 'Salario Mensual'");
    cy.get("h3").eq(1).should("contain", "Seleccione una opcion en 'Horas Trabajadas'");
    cy.get("h3").eq(2).should("contain", "Seleccione una opcion en 'Dias de la Semana'");

    cy.get("#salario-mensual").type("25000");
    cy.get("#enviar").click();
    cy.get("#salario-mensual").should("not.have.class", "error");
    cy.get("#opcion-horas").should("have.class", "error");
    cy.get("#opcion-dias").should("have.class", "error");
    cy.get("h3").eq(0).should("contain", "Seleccione una opcion en 'Horas Trabajadas'");
    cy.get("h3").eq(1).should("contain", "Seleccione una opcion en 'Dias de la Semana'");

    cy.get("#opcion-horas").select("1");
    cy.get("#enviar").click();
    cy.get("#salario-mensual").should("not.have.class", "error");
    cy.get("#opcion-horas").should("not.have.class", "error");
    cy.get("#opcion-dias").should("have.class", "error");
    cy.get("h3").eq(0).should("contain", "Seleccione una opcion en 'Dias de la Semana'");

    cy.get("#opcion-dias").select("3");
    cy.get("#enviar").click();
    cy.get("#salario-mensual").should("not.have.class", "error");
    cy.get("#opcion-horas").should("not.have.class", "error");
    cy.get("#opcion-dias").should("not.have.class", "error");
    cy.get("h3").should("not.exist")
})

it("Probar calculos", ()=>{
    cy.visit(URL);
    cy.get("#salario-mensual").type("100");
    cy.get("#opcion-dias").select("1");
    cy.get("#opcion-horas").select("2");
    cy.get("#enviar").click();
    cy.get("#salario-horario").should("have.value", "12.5$")
    cy.get("#salario-diario").should("have.value", "25$")
    cy.get("#salario-anual").should("have.value", "1200$")
});

it("Probar limpiar", ()=>{
    cy.get("#limpiar").click();
    cy.get("#salario-mensual").should("contain","");
    cy.get("#opcion-dias").should("contain","");
    cy.get("#opcion-horas").should("contain","");
    cy.get("#salario-horario").should("have.value", "")
    cy.get("#salario-diario").should("have.value", "")
    cy.get("#salario-anual").should("have.value", "")
});