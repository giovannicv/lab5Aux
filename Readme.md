## SOLID

### SOLID es un acrónimo que representa cinco principios de diseño de software que fueron introducidos por Robert C. Martin (también conocido como "Uncle Bob") a principios de la década de 2000. Estos principios están destinados a guiar a los desarrolladores hacia la creación de código más limpio, mantenible y escalable. Aquí está una breve descripción de cada uno de los principios:

1. ###### Principio de Responsabilidad Única (Single Responsibility Principle - SRP): 
*Este principio establece que una clase debe tener una única responsabilidad y que esa responsabilidad debe estar completamente encapsulada por la clase. En otras palabras, una clase debe tener solo una razón para cambiar.*

2. Principio de Abierto/Cerrado (Open/Closed Principle - OCP):
>Este principio establece que una entidad de software (clase, módulo, función, etc.) debe estar abierta para su extensión pero cerrada para su modificación. Esto significa que el comportamiento de una entidad puede ser extendido sin necesidad de modificar su código fuente.

3. Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP):
**Este principio establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa. En términos más simples, los subtipos deben ser substituibles por sus tipos base.**

4. **Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):**
* ### Este principio establece que una clase no debería verse obligada a implementar interfaces que no utiliza. En lugar de tener interfaces grandes y monolíticas, es mejor tener interfaces más pequeñas y específicas.

5. **Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP):** 
*Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.*

* ### Estos principios son herramientas valiosas para los desarrolladores de software, ya que promueven la escritura de código limpio, modular y fácil de mantener. Al seguir estos principios, los desarrolladores pueden crear sistemas que sean más flexibles, escalables y fáciles de modificar a medida que evolucionan los requisitos del software.