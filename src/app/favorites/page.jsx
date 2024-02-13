'use client';
import { SWRConfig } from 'swr';
import { fetchProxyMultipleEntities } from '@/utils/fetchers';
import TabsContainer from '@/components/favorites-page/TabsContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { Suspense } from 'react';
import Loader from '../loading';

const FavoritesPage = () => {
    return (
        <Tabs.Root
            className='page-container tabs-container'
            defaultValue='tracks'
        >
            <Tabs.List className='tablist'>
                <Tabs.Trigger value='tracks'>Треки</Tabs.Trigger>
                <Tabs.Trigger value='albums'>Альбомы</Tabs.Trigger>
                <Tabs.Trigger value='radio'>Радио</Tabs.Trigger>
                <Tabs.Trigger value='artists'>Артисты</Tabs.Trigger>
                <Tabs.Trigger value='playlists'>Плейлисты</Tabs.Trigger>
            </Tabs.List>

            <Suspense fallback={ <Loader /> }>
                <SWRConfig
                    value={{
                        fetcher: async ({ entitiesIds, endpoint }) => {
                            const promises = entitiesIds.map(async (id) => {
                                const res = await fetch(endpoint + '/' + id);
                                
                                return res.json();
                            });
                            
                            return await Promise.all(promises);
                        },
                        suspense: true
                    }}
                >
                    <TabsContainer />
                </SWRConfig>
            </Suspense>
        </Tabs.Root>
    );
};

const swrFetcher = async ({ entitiesIds, endpoint }) => {
    
}

export default FavoritesPage;
