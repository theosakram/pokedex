import { DocumentNode, OperationVariables, useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";

interface useInfiniteScrollProps {
    query: DocumentNode;
    variables: OperationVariables;
    cb: Function;
}

export const useInfiniteScroll = (props: useInfiniteScrollProps) => {
    const [fetchApi, { data, loading, error }] = useLazyQuery(props.query, {
        variables: props.variables,
    });
    const [infinteScollLoading, setInfiniteScrollLoading] = useState(false);

    const observer = useRef<any>();
    const lastEl = useCallback(
        (node) => {
            if (infinteScollLoading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log("masuk sini");
                    // const doThings = async () => {
                    //     try {
                    //         setInfiniteScrollLoading(true);
                    //         console.log("masuk sini");
                    //         props.cb();
                    //     } catch (error) {
                    //         console.log({ error });
                    //     } finally {
                    //         setInfiniteScrollLoading(false);
                    //     }
                    // };

                    // doThings();
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading]
    );

    useEffect(() => {
        fetchApi();
    }, [props.query, props.variables]);

    return { data, loading, error, lastEl, infinteScollLoading };
};
