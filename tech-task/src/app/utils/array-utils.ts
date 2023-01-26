export class ArrayUtils {
  public static createArrayIterator<T>(arr: T[], amountOfItems: number) {
    let current = 0,
      l = arr.length;
    return () => {
      let end = current + amountOfItems;
      var part = arr.slice(current, end);
      if (end > l) {
        end = end % l;
        part = part.concat(arr.slice(0, end));
      }
      current = end;
      return part;
    };
  }
}
