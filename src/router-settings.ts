import { Selector } from "oaf-side-effects";
import { Action, PageState } from ".";

export type RouterSettings<Location> = {
  readonly announcementsDivId: string;
  readonly primaryFocusTarget: Selector | ((location: Location) => Selector);
  readonly documentTitle: (location: Location) => string;
  readonly documentTitleAnnounceFallback: string;
  readonly navigationMessage: (
    title: string,
    location: Location,
    action?: Action,
  ) => string;
  readonly shouldHandleAction: (
    previousLocation: Location,
    nextLocation: Location,
    action?: Action,
  ) => boolean;
  readonly disableAutoScrollRestoration: boolean;
  readonly announcePageNavigation: boolean;
  readonly repairFocus: boolean;
  readonly setPageTitle: boolean;
  readonly handleHashFragment: boolean;
  readonly restorePageStateOnPop: boolean;
  readonly renderTimeout: number;
  readonly defaultPageState: PageState;
  readonly smoothScroll?: boolean;
  readonly setMessageTimeout?: number;
  readonly clearMessageTimeout?: number;
};

export const defaultSettings: RouterSettings<unknown> = {
  announcementsDivId: "announcements",
  primaryFocusTarget: "main h1, [role=main] h1",
  // eslint-disable-next-line functional/functional-parameters
  documentTitle: () => document.title,
  // TODO i18n
  documentTitleAnnounceFallback: "new page",
  // TODO i18n
  navigationMessage: (title: string): string => `Navigated to ${title}.`,
  // eslint-disable-next-line functional/functional-parameters
  shouldHandleAction: () => true,
  disableAutoScrollRestoration: true,
  announcePageNavigation: true,
  repairFocus: true,
  setPageTitle: false,
  handleHashFragment: true,
  restorePageStateOnPop: true,
  renderTimeout: 0,
  defaultPageState: { x: 0, y: 0 },
  smoothScroll: undefined,
  setMessageTimeout: undefined,
  clearMessageTimeout: undefined,
};
