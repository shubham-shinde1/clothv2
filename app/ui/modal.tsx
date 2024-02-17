"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import useMultiStepForm from "../customHooks/useMultiStepForm";
import WelcomeStep from "../ui/formSteps/welcomeStep";
import ItemSelectionStep from "../ui/formSteps/itemSelectionStep";

export default function FlowByteModal() {
  const [openModal, setOpenModal] = useState(false);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <WelcomeStep />,
      <ItemSelectionStep />,
      <div>3</div>,
      <div>4</div>,
    ]);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Schedule Pickup</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            fontFamily: "Arial",
          }}
        >
          <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="button" onClick={next}>
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
        {/* <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
