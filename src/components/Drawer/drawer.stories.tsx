import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "./Drawer"

const meta: Meta<typeof Drawer> = {
  title: "ui/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DrawerClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DrawerClose>
            </DialogFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}
