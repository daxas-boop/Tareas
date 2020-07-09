const URL = "http://127.0.0.1:8080/clase-5/tarea3.html";

it("Prueba de errores",()=>{
    cy.visit(URL)
    cy.get("#calcular").click();
    cy.get('input[name="horas"]').should("have.class", "error");
    cy.get('input[name="minutos"]').should("have.class", "error");
    cy.get('input[name="segundos"]').should("have.class", "error");

    cy.get('input[name="horas"]').each((ele,i)=>{
        cy.get('input[name="horas"]').eq(i).type("2");
        cy.get("#calcular").click();
        cy.get('input[name="horas"]').eq(i).should("not.have.class", "error");
    })
    
    cy.get('input[name="minutos"]').each((ele,i)=>{
        cy.get('input[name="minutos"]').eq(i).type("2");
        cy.get("#calcular").click();
        cy.get('input[name="minutos"]').eq(i).should("not.have.class", "error");
    })
    cy.get('input[name="segundos"]').each((ele,i)=>{
        cy.get('input[name="segundos"]').eq(i).type("2");
        cy.get("#calcular").click();
        cy.get('input[name="segundos"]').eq(i).should("not.have.class", "error");
    })
})

it("Prueba calculos", () =>{
    cy.get('input[name="horas"]').each((ele,i)=>{
        cy.get('input[name="horas"]').eq(i).type("2");
    })
    
    cy.get('input[name="minutos"]').each((ele,i)=>{
        cy.get('input[name="minutos"]').eq(i).type("2");
    })
    cy.get('input[name="segundos"]').each((ele,i)=>{
        cy.get('input[name="segundos"]').eq(i).type("2");
    })
    cy.get("#calcular").click();
    cy.get("#resultado").should("have.value", " Total: 111horas, 51minutos, 50segundos.")
})
