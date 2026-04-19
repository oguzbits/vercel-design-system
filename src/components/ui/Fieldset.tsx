import React from 'react'
import { Fieldset as GeistFieldset } from '@geist-ui/core'
import GeistFieldsetTitle from '@geist-ui/core/esm/fieldset/fieldset-title'
import GeistFieldsetSubtitle from '@geist-ui/core/esm/fieldset/fieldset-subtitle'
import GeistFieldsetFooter from '@geist-ui/core/esm/fieldset/fieldset-footer'
import GeistFieldsetGroup from '@geist-ui/core/esm/fieldset/fieldset-group'
import GeistFieldsetContent from '@geist-ui/core/esm/fieldset/fieldset-content'

const FieldsetComponent: React.FC<any> = (props) => {
  return <GeistFieldset {...(props as any)} />
}

export type FieldsetComponentType = React.FC<any> & {
  Title: any;
  Subtitle: any;
  Footer: any;
  Group: any;
  Content: any;
  Body: any;
}

const Fieldset = FieldsetComponent as FieldsetComponentType
Fieldset.Title = GeistFieldsetTitle as any
Fieldset.Subtitle = GeistFieldsetSubtitle as any
Fieldset.Footer = GeistFieldsetFooter as any
Fieldset.Group = GeistFieldsetGroup as any
Fieldset.Content = GeistFieldsetContent as any
Fieldset.Body = GeistFieldsetContent as any
Fieldset.displayName = 'Fieldset'

export { Fieldset }
