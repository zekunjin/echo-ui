import { LinkIcon } from '@echoui/shared-icons'
import { linkAnchorClasses } from '@nextui-org/theme'
import { defineComponent, type PropType } from 'vue'
import { type UseLinkProps, useLink } from './use-link'

export interface LinkProps extends UseLinkProps { }

const props = {
  isExternal: Boolean,
  showAnchorIcon: Boolean,
  isFocused: Boolean,
  isDisabled: Boolean,
  isFocusVisible: Boolean,
  href: String,
  color: String as PropType<LinkProps['color']>,
  size: String as PropType<LinkProps['size']>,
  underline: String as PropType<LinkProps['underline']>
}

const Link = defineComponent({
  props,
  setup (props, { slots }) {
    const anchorIcon = slots.anchorIcon ? slots.anchorIcon?.() : <LinkIcon class={linkAnchorClasses} />
    const { Component, getLinkProps } = useLink(props)

    return () => (
      <Component {...getLinkProps.value}>
        {slots.default?.()}
        {props.showAnchorIcon && anchorIcon}
      </Component>
    )
  }
})
export { Link }