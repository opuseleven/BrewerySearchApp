
export interface TypeFilterState {
  micro: boolean,
  brewpub: boolean,
  contract: boolean,
  large: boolean,
  regional: boolean
}

export const defaultTypeFilterState: TypeFilterState = {
  micro: false,
  brewpub: false,
  contract: false,
  large: false,
  regional: false
}
