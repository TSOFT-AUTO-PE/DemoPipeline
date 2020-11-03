$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MiMovistar_FlujoRecargas.feature");
formatter.feature({
  "line": 1,
  "name": "Mi Movistar Flujo de Recargas",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 97,
  "name": "Recargas en Mi Movistar WEB PUBLICA (Generando automáticamente Token 2 URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Test6"
    },
    {
      "line": 96,
      "name": "@Regresion"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "se genera la URL mediante el API_TEST_recargasVersion2",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "se ingresa en la URL el token generado \"\u003ccaso_prueba\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "se ingresara el email \"\u003ccaso_prueba\u003e\" y se da click en continuar",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "se ingresa el numero de tarjeta \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "se ingresa el mes de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "se ingresa el anio de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "se ingresa el codigo de verificacion \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 110,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 111,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 405365300,
  "status": "passed"
});
formatter.before({
  "duration": 7772160100,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Recargas en Mi Movistar WEB PUBLICA (Generando automáticamente Token 2 URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Test6"
    },
    {
      "line": 96,
      "name": "@Regresion"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "se genera la URL mediante el API_TEST_recargasVersion2",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "se ingresa en la URL el token generado \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "se ingresara el email \"1\" y se da click en continuar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "se ingresa el numero de tarjeta \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "se ingresa el mes de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "se ingresa el anio de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "se ingresa el codigo de verificacion \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "stepsRecargasHome.seGeneraLaURLMedianteElAPI_TEST_recargasVersion(int)"
});
formatter.result({
  "duration": 5351894000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "stepsRecargasHome.seIngresaEnLaURLElTokenGenerado(String)"
});
formatter.result({
  "duration": 3903172200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "stepsRecargasCorreo.seIngresaraElEmailYSeDaClickEnContinuar(String)"
});
formatter.result({
  "duration": 2809070200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "stepsRecargasPago.seIngresaElNumeroDeTarjeta(String)"
});
formatter.result({
  "duration": 12410718700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "stepsRecargasPago.seIngresaElMesDeVencimiento(String)"
});
formatter.result({
  "duration": 5753597600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "stepsRecargasPago.seIngresaElAnioDeVencimiento(String)"
});
formatter.result({
  "duration": 5686432100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "stepsRecargasPago.seIngresaElCodigoDeVerificacion(String)"
});
formatter.result({
  "duration": 5669294300,
  "status": "passed"
});
formatter.match({
  "location": "stepsRecargasPago.seDaClickEnElBotonPagar()"
});
formatter.result({
  "duration": 885986400,
  "status": "passed"
});
formatter.match({
  "location": "stepsRecargasFinal.seVerificaQueSeHizoLaRecargaCorrecta()"
});
formatter.result({
  "duration": 22122398300,
  "status": "passed"
});
formatter.after({
  "duration": 6652596300,
  "status": "passed"
});
});