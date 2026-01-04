'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './getCategorizing.module.scss';
import boyImage from '../../../public/icons/uncategorizeTrxImage.svg';
import congratzTick from '../../../public/icons/uncategorizeCongratzTick.svg';
import Image from 'next/image';
import { AccountDetails } from '@/ts/interfaces/accounts.interface';
import { CategoryDetails } from '@/ts/interfaces/category.interface';
import { VoucherDetails } from '@/ts/interfaces/vouchers.interface';
import { store } from '@/store/store';
import { EditVoucher } from '@/store/voucherSlice';
import { toast } from 'react-toastify';
import { showToast } from '@/utils/toasts/showToast';
import { ToastType } from '@/utils/enums/ToastTypes.enum';
import { useRouter } from 'next/router';

type propType {
  uncatTrxList: [],
  onClose: () => void
}
export const GetCategorizing()
{
 const [showMoreCategories, setShowMoreCategories]=useState<Boolean>(false);
}
