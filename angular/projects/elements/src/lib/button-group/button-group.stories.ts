import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeButtonGroupDirective } from '../vscode-button-group.directive';

const meta: Meta<VscodeButtonGroupDirective> = {
  title: 'Components/Button Group',
  component: VscodeButtonGroupDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeButtonGroupDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-button-group>Button Group</vscode-button-group>',
  }),
};
