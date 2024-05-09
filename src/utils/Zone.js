export const getZoneById = (arr, id) => {
  const idx = arr.findIndex(i => i.value === id);
  return idx === -1 ? null : arr[idx];
};

export const addressInfoToString = addressInfo => {
  return `${addressInfo.address || ''}${addressInfo.address ? ', ' : ''}${
    addressInfo.ward || ''
  }${addressInfo.ward ? ', ' : ''}${addressInfo.district || ''}${
    addressInfo.district ? ', ' : ''
  }${addressInfo.province || addressInfo.zone}`;
};

export const mapSelectionProvinces = data => {
  return data.map(item => ({
    label: item.name,
    value: item.code,
  }));
};

export const mapSelectionDistricts = data => {
  return data.map(item => ({
    label: item.name,
    value: item.code,
  }));
};

export const mapSelectionWards = data => {
  return data.map(item => ({
    label: item.name,
    value: item.code,
  }));
};
