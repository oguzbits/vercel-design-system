/**
 * Comprehensive Geist UI 'Fixer' Utility
 * 
 * This utility manually re-attaches all Geist UI sub-components to their parents.
 * This is CRITICAL for Vite/Storybook environments where 'sideEffects: false'
 * causes these static property assignments to be tree-shaken or elided.
 */

import {
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumbs,
  ButtonDropdown,
  Card,
  Checkbox,
  Collapse,
  Description,
  Display,
  Divider,
  Dot,
  Drawer,
  Fieldset,
  Grid,
  Image,
  Input,
  Loading,
  Modal,
  Note,
  Page,
  Pagination,
  Popover,
  Progress,
  Radio,
  Rating,
  Select,
  Slider,
  Snippet,
  Spacer,
  Spinner,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  Toggle,
  Tooltip,
  Tree,
  User,
} from '@geist-ui/core';

// Direct imports from ESM to ensure we have the actual component references
import AutoCompleteItem from '@geist-ui/core/esm/auto-complete/auto-complete-item';
import AutoCompleteSearching from '@geist-ui/core/esm/auto-complete/auto-complete-searching';
import AutoCompleteEmpty from '@geist-ui/core/esm/auto-complete/auto-complete-empty';
import AvatarGroup from '@geist-ui/core/esm/avatar/avatar-group';
import BadgeAnchor from '@geist-ui/core/esm/badge/badge-anchor';
import BreadcrumbsItem from '@geist-ui/core/esm/breadcrumbs/breadcrumbs-item';
import BreadcrumbsSeparator from '@geist-ui/core/esm/breadcrumbs/breadcrumbs-separator';
import ButtonDropdownItem from '@geist-ui/core/esm/button-dropdown/button-dropdown-item';
import CardFooter from '@geist-ui/core/esm/card/card-footer';
import CardContent from '@geist-ui/core/esm/card/card-content';
import CheckboxGroup from '@geist-ui/core/esm/checkbox/checkbox-group';
import CollapseGroup from '@geist-ui/core/esm/collapse/collapse-group';
import FieldsetTitle from '@geist-ui/core/esm/fieldset/fieldset-title';
import FieldsetSubtitle from '@geist-ui/core/esm/fieldset/fieldset-subtitle';
import FieldsetFooter from '@geist-ui/core/esm/fieldset/fieldset-footer';
import FieldsetGroup from '@geist-ui/core/esm/fieldset/fieldset-group';
import FieldsetContent from '@geist-ui/core/esm/fieldset/fieldset-content';
import GridContainer from '@geist-ui/core/esm/grid/grid-container';
import ImageBrowser from '@geist-ui/core/esm/image/image-browser';
import InputPassword from '@geist-ui/core/esm/input/password';
import ModalTitle from '@geist-ui/core/esm/modal/modal-title';
import ModalSubtitle from '@geist-ui/core/esm/modal/modal-subtitle';
import ModalContent from '@geist-ui/core/esm/modal/modal-content';
import ModalAction from '@geist-ui/core/esm/modal/modal-action';
import PageHeader from '@geist-ui/core/esm/page/page-header';
import PageContent from '@geist-ui/core/esm/page/page-content';
import PageFooter from '@geist-ui/core/esm/page/page-footer';
import PaginationPrevious from '@geist-ui/core/esm/pagination/pagination-previous';
import PaginationNext from '@geist-ui/core/esm/pagination/pagination-next';
import PopoverItem from '@geist-ui/core/esm/popover/popover-item';
import RadioGroup from '@geist-ui/core/esm/radio/radio-group';
import RadioDescription from '@geist-ui/core/esm/radio/radio-description';
import SelectOption from '@geist-ui/core/esm/select/select-option';
import TableColumn from '@geist-ui/core/esm/table/table-column';
import TabsItem from '@geist-ui/core/esm/tabs/tabs-item';
import TreeFile from '@geist-ui/core/esm/tree/tree-file';
import TreeFolder from '@geist-ui/core/esm/tree/tree-folder';
import UserLink from '@geist-ui/core/esm/user/user-link';

export const patchGeistComponents = () => {
  if (typeof window === 'undefined') return;

  const patch = (parent: any, children: Record<string, any>) => {
    if (!parent) return;
    Object.keys(children).forEach(key => {
      if (!parent[key]) {
        parent[key] = children[key];
      }
    });
  };

  patch(AutoComplete, {
    Item: AutoCompleteItem,
    Option: AutoCompleteItem,
    Searching: AutoCompleteSearching,
    Empty: AutoCompleteEmpty,
  });

  patch(Avatar, { Group: AvatarGroup });
  patch(Badge, { Anchor: BadgeAnchor });
  
  patch(Breadcrumbs, {
    Item: BreadcrumbsItem,
    Separator: BreadcrumbsSeparator,
  });

  patch(ButtonDropdown, { Item: ButtonDropdownItem });
  
  patch(Card, {
    Footer: CardFooter,
    Actions: CardFooter,
    Content: CardContent,
    Body: CardContent,
  });

  patch(Checkbox, { Group: CheckboxGroup });
  patch(Collapse, { Group: CollapseGroup });
  
  patch(Drawer, {
    Title: ModalTitle,
    Subtitle: ModalSubtitle,
    Content: ModalContent,
  });

  patch(Fieldset, {
    Title: FieldsetTitle,
    Subtitle: FieldsetSubtitle,
    Footer: FieldsetFooter,
    Group: FieldsetGroup,
    Content: FieldsetContent,
    Body: FieldsetContent,
  });

  patch(Grid, { Container: GridContainer });
  patch(Image, { Browser: ImageBrowser });
  
  patch(Input, {
    Textarea: Textarea, // Re-use top-level Textarea
    Password: InputPassword,
  });

  patch(Modal, {
    Title: ModalTitle,
    Subtitle: ModalSubtitle,
    Content: ModalContent,
    Action: ModalAction,
  });

  patch(Page, {
    Header: PageHeader,
    Content: PageContent,
    Body: PageContent,
    Footer: PageFooter,
  });

  patch(Pagination, {
    Previous: PaginationPrevious,
    Next: PaginationNext,
  });

  patch(Popover, {
    Item: PopoverItem,
    Option: PopoverItem,
  });

  patch(Radio, {
    Group: RadioGroup,
    Description: RadioDescription,
    Desc: RadioDescription,
  });

  patch(Select, { Option: SelectOption });
  patch(Table, { Column: TableColumn });
  
  patch(Tabs, {
    Item: TabsItem,
    Tab: TabsItem,
  });

  patch(Tree, {
    File: TreeFile,
    Folder: TreeFolder,
  });

  patch(User, { Link: UserLink });
};

// Auto-patch on import
patchGeistComponents();
