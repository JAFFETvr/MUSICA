import { Nodo } from "./Nodo.js";

export class CircularDoublyLinkedList {
  constructor() {
    this.cabeza = null;
    this.actual = null;
  }

  addNode(datos) {
    const nuevoNodo = new Nodo(datos);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cabeza.prev = this.cabeza;
      this.cabeza.siguiente = this.cabeza;
      this.actual = this.cabeza;
    } else {
      const cola = this.cabeza.prev;
      cola.siguiente = nuevoNodo;
      nuevoNodo.prev = cola;
      nuevoNodo.siguiente = this.cabeza;
      this.cabeza.prev = nuevoNodo;
    }
  }

  getNext() {
    this.actual = this.actual.siguiente;
    return this.actual.datos;
  }

  getPrev() {
    this.actual = this.actual.prev;
    return this.actual.datos;
  }
}
