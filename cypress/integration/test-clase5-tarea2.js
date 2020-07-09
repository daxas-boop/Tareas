const URL = "http://127.0.0.1:8080/clase-5/tarea2.html"

it("Prueba Errores",()=>{
    cy.visit(URL);
    cy.get("#enviar").click();
    cy.get("h3").eq(0).should("contain" ,"Ingrese un nombre");
    cy.get("h3").eq(1).should("contain" ,"Ingrese un apellido");
    cy.get("#titulo").should("contain", "Bienvenido");
    cy.get("#nombre").should("have.class", "error");
    cy.get("#apellido").should("have.class", "error");

    cy.get("#nombre").type("3");
    cy.get("#apellido").type("aaaaaaaaaaaaa");
    cy.get("#enviar").click();
    cy.get("h3").eq(0).should("contain" ,"Ingrese un nómbre solo con letras");
    cy.get("h3").eq(1).should("contain" ,"Ingrese un apellido con menos de 12 caracteres");
    cy.get("#titulo").should("contain", "Bienvenido");  
    cy.get("#nombre").should("have.class", "error");
    cy.get("#apellido").should("have.class", "error");
    
    cy.get("#nombre").clear();
    cy.get("#apellido").clear();
    cy.get("#nombre").type("aaaaaaaaaaaaa");
    cy.get("#apellido").type("3");
    cy.get("#enviar").click();
    cy.get("h3").eq(0).should("contain" ,"Ingrese un nombre con menos de 12 caracteres");
    cy.get("h3").eq(1).should("contain" ,"Ingrese un apellido solo con letras");
    cy.get("#titulo").should("contain", "Bienvenido"); 
    cy.get("#nombre").should("have.class", "error");
    cy.get("#apellido").should("have.class", "error");
})

it("Prueba Exito", () =>{
    cy.get("#nombre").clear();
    cy.get("#apellido").clear();
    cy.get("#nombre").type("Juan");
    cy.get("#apellido").type("Pepega");
    cy.get("#enviar").click();
    cy.get("h3").should("not.exist");
    cy.get("#titulo").should("contain", "Bienvenido Juan Pepega")
    cy.get("#nombre").should("not.have.class", "error");
    cy.get("#apellido").should("not.have.class", "error");
});