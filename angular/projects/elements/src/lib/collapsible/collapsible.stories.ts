import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeCollapsibleDirective } from '../vscode-collapsible.directive';

const meta: Meta<VscodeCollapsibleDirective> = {
  title: 'Components/Collapsible',
  component: VscodeCollapsibleDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeCollapsibleDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-collapsible>Collapsible</vscode-collapsible>',
  }),
};
