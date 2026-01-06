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

type Props = {
  show: boolean;
  active: boolean;
  setActive: (v: boolean) => void;
  unCatTrxList: VoucherDetails[];
  onClose: () => void;
};

const GetCategorizing = (props: Props) => {
  const { show, active, setActive, unCatTrxList, onClose } = props;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [congratulationsPopup, setCongratulationsPopup] = useState(false);
  const [skippedPopup, setSkippedPopup] = useState(false);
  const [remainingPopup, setRemainingPopup] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);

  // ✅ Snapshot queue (freeze) so props changes don't break the flow
  const [trxQueue, setTrxQueue] = useState<VoucherDetails[]>([]);
  const [hasInitializedQueue, setHasInitializedQueue] = useState(false);
  const [currentTrx, setCurrentTrx] = useState<VoucherDetails | null>(null);
  const [accountObj, setAccountObj] = useState<AccountDetails | undefined>(
    null
  );
  const [showContent, setShowContent] = useState(false);
  const allCategories: CategoryDetails[] = useMemo(() => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(window.sessionStorage.getItem('allCategories') || '[]');
    } catch {
      return [];
    }
  }, []);

  const allAccounts: AccountDetails[] = useMemo(() => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(window.sessionStorage.getItem('accountList') || '[]');
    } catch {
      return [];
    }
  }, []);
  The provided code snippet is a React hook using useMemo to retrieve a list of categories from window.sessionStorage. This approach is common in web development for managing application state across different components or user sessions. 
