"use client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function WithForm() {
  return (
    <Modal>
        <Button         
        className="fixed bottom-6 right-5 z-20 flex h-13 w-13 cursor-pointer items-center justify-center rounded-full bg-[#F95C4B] text-white shadow-lg transition-transform hover:brightness-95 active:scale-95 sm:bottom-7 sm:right-6 sm:h-14 sm:w-14 md:bottom-8 md:right-8 md:h-15 md:w-15 lg:bottom-10 lg:right-12 lg:h-14 lg:w-14"
        variant="secondary">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 md:h-7 md:w-7 lg:h-6 lg:w-6"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Contacto</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Agrega nuevos contactos en tu agenda 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full " name="company" type="text" variant="secondary">
                    <Label>Empresa</Label>
                    <Input  className="[--field-border-focus:#F95C4B] focus:ring-[#F95C4B]!" placeholder="Nombre de la empresa " />
                  </TextField>
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Nombre</Label>
                    <Input   className="[--field-border-focus:#F95C4B] focus:ring-[#F95C4B]!" placeholder="Nombre del contacto" />
                  </TextField>
                  <TextField className="w-full" name="role" type="text" variant="secondary">
                    <Label>Cargo</Label>
                    <Input  className="[--field-border-focus:#F95C4B] focus:ring-[#F95C4B]!" placeholder="Cargo del contacto" />
                  </TextField>
                  <TextField className="w-full" name="role" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input  className="[--field-border-focus:#F95C4B] focus:ring-[#F95C4B]!" placeholder="Correo del contacto" />
                  </TextField>
                  <TextField className="w-full" name="role" type="tel" variant="secondary">
                    <Label>Telefono</Label>
                    <Input  className="[--field-border-focus:#F95C4B] focus:ring-[#F95C4B]!" placeholder="Telefono del contacto" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button className="text-[#000000]"  slot="close" variant="secondary">
                Cancel
              </Button>
              <Button className="bg-[#F95C4B]" slot="close">Guardar</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}