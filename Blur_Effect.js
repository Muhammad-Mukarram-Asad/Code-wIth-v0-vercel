 // Handle tap and hold logic
  const handleMouseDown = (index: number) => {
    setHoldIndex(index);
    holdTimer.current = setTimeout(() => {
      setSelectedIndexes((prev) =>
        prev.includes(index) ? prev : [...prev, index]
      );
      setHoldIndex(null);
    }, holdDuration);
  };

  const handleMouseUp = (item: UnusualTrx, index: number) => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      // If hold didn't complete, treat as tap
      if (!selectedIndexes.includes(index)) {
        console.log('Tapped for details:', item);
        // Here you can navigate or show a modal for details
      }
    }
    setHoldIndex(null);
  };

  const handleMouseLeave = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    setHoldIndex(null);
  };
// Filtering the selected & unselected list elements:
