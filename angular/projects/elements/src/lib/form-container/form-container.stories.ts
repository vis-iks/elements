import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeFormContainerDirective } from '../vscode-form-container.directive';

const meta: Meta<VscodeFormContainerDirective> = {
  title: 'Components/Form Container',
  component: VscodeFormContainerDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeFormContainerDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-form-container>Form Container</vscode-form-container>',
  }),
};
