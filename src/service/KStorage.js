/**
 * Created by itwo on 1/4/2019.
 */

import Storage from 'react-native-storage';
import { AsnycStorage } from 'react-native';

const storage = new Storage({
  size: 1000,
  storageBackend: AsnycStorage
});

class _KStorage {
  constructor(){

  }

  addType(type,data) {
    if(type == 1) {
      //income
      storage.save({
        key: 'KINCOMETYPES',
        data: data
      });
    }else if(type ==2) {
      //payment
      storage.save({
        key: 'KPAYMENTTYPES',
        data: data
      });
    }
  }

  getTypes(type): Promise<any> {
    if(type == 1) {
      //income
     return storage.load({
        key: 'KINCOMETYPES'
      });
    }else if(type ==2) {
      //payment
      return storage.load({
        key: 'KPAYMENTTYPES'
      });
    }
  }

  addAccount() {
    if(type == 1) {
      //income
      storage.save({
        key: 'KINCOME',
        data: data
      });
    }else if(type ==2) {
      //payment
      storage.save({
        key: 'KPAYMENT',
        data: data
      });
    }
  }

  getAccounts() : Promise<any> {
    if (type == 1) {
      //income
      return storage.load({
        key: 'KINCOME'
      });
    } else if (type == 2) {
      //payment
      return storage.load({
        key: 'KPAYMENT'
      });
    }
  }
}

export var KStorage = new _KStorage();