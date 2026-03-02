import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeRadioDirective } from '../vscode-radio.directive';

const meta: Meta<VscodeRadioDirective> = {
  title: 'Components/Radio',
  component: VscodeRadioDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeRadioDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-radio>Radio</vscode-radio>',
  }),
};
